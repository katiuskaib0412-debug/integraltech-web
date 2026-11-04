/**
 * INTEGRALTECH - Recepción de leads (formulario de contacto y chatbot) en Google Sheets.
 *
 * Pasos: en la hoja de cálculo, Extensiones > Apps Script > pega este código
 * y luego Implementar > Nueva implementación > Aplicación web
 * (Ejecutar como: Yo | Quién tiene acceso: Cualquier persona).
 */

const SHEET_NAME = "Leads";
const HEADERS = [
  "Fecha",
  "Origen",
  "Nombre",
  "Teléfono",
  "Correo",
  "Servicio",
  "Mensaje",
];

/** Recibe los datos enviados desde el sitio web (POST). */
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = getLeadsSheet_();

    sheet.appendRow([
      new Date(),
      data.origen || "",
      data.nombre || "",
      data.telefono || "",
      data.email || "",
      data.servicio || "",
      data.mensaje || "",
    ]);

    return jsonResponse_({ ok: true });
  } catch (err) {
    return jsonResponse_({ ok: false, error: String(err) });
  }
}

/** Comprobación rápida: abre la URL /exec en el navegador y debe mostrar "OK". */
function doGet() {
  return ContentService.createTextOutput("INTEGRALTECH lead endpoint OK");
}

/** Crea la hoja "Leads" con encabezados si no existe. */
function getLeadsSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function jsonResponse_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}

/** Ejecuta esta función una vez desde el editor para autorizar permisos. */
function autorizar() {
  getLeadsSheet_();
}
