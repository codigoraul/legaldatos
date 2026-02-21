export async function POST({ request }) {
  try {
    const data = await request.formData();
    
    // Validar datos
    const nombre = data.get('Nombre')?.trim();
    const email = data.get('Email')?.trim();
    const asunto = data.get('Asunto')?.trim();
    const mensaje = data.get('Mensaje')?.trim();
    
    // Validación básica
    if (!nombre || !email || !asunto || !mensaje) {
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'Todos los campos son requeridos' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'Email inválido' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Aquí iría el envío real del email
    // Por ahora, simulamos éxito
    console.log('Nuevo contacto:', { nombre, email, asunto, mensaje });
    
    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Mensaje enviado correctamente' 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
    
  } catch (error) {
    console.error('Error en contacto:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      error: 'Error al procesar el mensaje' 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
