When I’m not quite sure how to get exactly what I need out of the request URL, I write some stanza that spits out the value of just about every relevant getter method on the javax.servlet.http.HttpServletRequest object. I’ve done this more than once. To be honest… more than twice – probably three or more times. I feel really bad about it, honestly. You know what I’m talking about? It looks something like this: 

``` java
@RequestMapping(value="/root/**", method = RequestMethod.POST)
public void handlePost(Model model,HttpServletRequest request, HttpServletResponse response) {
 
    LOG.trace(">> handlePost() > /root/{resourcePath}: ");

    StringBuilder sb = new StringBuilder();
    sb.append(" [");
    sb.append("\n\t request.getContextPath(): ").append(request.getContextPath());
    sb.append("\n\t request.getLocalAddr(): ").append(request.getLocalAddr());
    sb.append("\n\t request.getLocalName(): ").append(request.getLocalName());
    sb.append("\n\t request.getLocalPort(): ").append(request.getLocalPort());
    sb.append("\n\t request.getPathInfo(): ").append(request.getPathInfo());
    sb.append("\n\t request.getPathTranslated(): ").append(request.getPathTranslated());
    sb.append("\n\t request.getProtocol(): ").append(request.getProtocol());
    sb.append("\n\t request.getRemoteAddr(): ").append(request.getRemoteAddr());
    sb.append("\n\t request.getRemoteHost(): ").append(request.getRemoteHost());
    sb.append("\n\t request.getRemotePort(): ").append(request.getRemotePort());
    sb.append("\n\t request.getRequestURI(): ").append(request.getRequestURI());
    sb.append("\n\t request.getRequestURL(): ").append(request.getRequestURL());
    sb.append("\n\t request.getScheme(): " ).append(request.getScheme());
    sb.append("\n\t request.getServerName(): ").append(request.getServerName());
    sb.append("\n\t request.getServerPort(): ").append(request.getServerPort());
    sb.append("\n\t request.getServletPath(): ").append(request.getServletPath());
    sb.append("\n]");

    LOG.trace("-- handlePost() > interesting URL and URI related stuff from request object: " + sb.toString());

}
```

C’mon. You know you’ve done it more than once too, so just stop it with the smug smile.

I’m ashamed and sick of it, so this time, I’m dropping a breadcrumb for my future self by posting the output, which will give me a clue in some future date when my brain is wore to the core like it is tonight. As God is my witness, I will never, ever write this code stanza again. Here’s the output…

``` bash
 21:07:18.650 [http-bio-8080-exec-3] TRACE c.b.c.controllers.LdpRestController - -- handlePost() &gt; interesting URL and URI related stuff from request object: [
         request.getContextPath(): /myapp
         request.getLocalAddr(): 0:0:0:0:0:0:0:1
         request.getLocalName(): 0:0:0:0:0:0:0:1
         request.getLocalPort(): 8080
         request.getPathInfo(): /root/hello/world.jsp
         request.getPathTranslated(): C:\workspace-c\.metadata\.plugins\org.eclipse.wst.server.core\tmp0\wtpwebapps\myapp\root\hello\world.jsp
         request.getProtocol(): HTTP/1.1
         request.getRemoteAddr(): 0:0:0:0:0:0:0:1
         request.getRemoteHost(): 0:0:0:0:0:0:0:1
         request.getRemotePort(): 49278
         request.getRequestURI(): /myapp/abc/root/hello/world.jsp
         request.getRequestURL(): http://localhost:8080/myapp/abc/root/hello/world.jsp
         request.getScheme(): http
         request.getServerName(): localhost
         request.getServerPort(): 8080
         request.getServletPath(): /abc
]
```

