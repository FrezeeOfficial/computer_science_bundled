#include <iostream>
#include <string>

using namespace std;


int main()
{
    int16_t port = 12345;
    sockpp::tcp_acceptor acc(port);

    if (!acc)
        report_error(acc.last_error_str());

    // Accept a new client connection
    sockpp::tcp_socket sock = acc.accept();

    printf("test writing");

    return 0;
}
