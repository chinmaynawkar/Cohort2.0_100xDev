#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <arpa/inet.h>

#define PORT 8080
#define BUFFER_SIZE 1024

// Function to handle incoming client requests
void handle_client(int client_socket) {
    char buffer[BUFFER_SIZE] = {0};
    
    // Read the request from the client
    read(client_socket, buffer, BUFFER_SIZE);
    printf("Request:\n%s\n", buffer);

    // Your response HTML goes here
    const char *response = "HTTP/1.1 200 OK\nContent-Type: text/html\n\n<html><body><h1>Hello there, This is Chinmay!</h1></body></html>";
    
    // Send the response back to the client
    write(client_socket, response, strlen(response));

    // Close the connection
    close(client_socket);
}

int main() {
    int server_socket, client_socket;
    struct sockaddr_in server_address, client_address;
    socklen_t address_len = sizeof(server_address);

    // Create socket
    if ((server_socket = socket(AF_INET, SOCK_STREAM, 0)) == 0) {
        perror("Socket creation failed");
        exit(EXIT_FAILURE);
    }

    // Set up the server address struct
    server_address.sin_family = AF_INET;
    server_address.sin_addr.s_addr = INADDR_ANY;
    server_address.sin_port = htons(PORT);

    // Bind socket
    if (bind(server_socket, (struct sockaddr *)&server_address, sizeof(server_address)) < 0) {
        perror("Bind failed");
        exit(EXIT_FAILURE);
    }

    // Listen for connections
    if (listen(server_socket, 3) < 0) {
        perror("Listen failed");
        exit(EXIT_FAILURE);
    }

    printf("Server listening on port %d...\n", PORT);

    while (1) {
        // Accept a connection
        if ((client_socket = accept(server_socket, (struct sockaddr *)&client_address, &address_len)) < 0) {
            perror("Accept failed");
            exit(EXIT_FAILURE);
        }

        // Handle the client request
        handle_client(client_socket);
    }

    return 0;
}
