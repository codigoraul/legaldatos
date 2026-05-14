<?php
/**
 * Agregar este código al functions.php del tema de WordPress
 * para disparar el deploy automáticamente cuando se publique contenido
 */

// Disparar webhook cuando se publique un post o servicio
function trigger_github_deploy($post_id, $post, $update) {
    // Solo disparar en publicaciones, no en borradores
    if ($post->post_status !== 'publish') {
        return;
    }
    
    // Solo para posts y servicios
    if (!in_array($post->post_type, ['post', 'servicio'])) {
        return;
    }
    
    // Configuración
    $github_token = 'TU_GITHUB_TOKEN_AQUI'; // Reemplazar con tu token
    $github_user = 'codigoraul';
    $github_repo = 'legaldatos';
    $workflow_id = 'deploy-ftp.yml';
    
    // URL del API de GitHub
    $url = "https://api.github.com/repos/{$github_user}/{$github_repo}/actions/workflows/{$workflow_id}/dispatches";
    
    // Hacer la petición
    $response = wp_remote_post($url, [
        'headers' => [
            'Authorization' => "Bearer {$github_token}",
            'Accept' => 'application/vnd.github.v3+json',
            'Content-Type' => 'application/json',
        ],
        'body' => json_encode([
            'ref' => 'main'
        ]),
        'timeout' => 15,
    ]);
    
    // Log para debug (opcional)
    if (is_wp_error($response)) {
        error_log('Error disparando deploy: ' . $response->get_error_message());
    } else {
        error_log('Deploy disparado exitosamente para: ' . $post->post_title);
    }
}

// Hooks para posts y servicios
add_action('publish_post', 'trigger_github_deploy', 10, 3);
add_action('publish_servicio', 'trigger_github_deploy', 10, 3);
