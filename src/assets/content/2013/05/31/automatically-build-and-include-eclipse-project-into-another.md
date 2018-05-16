I am such a lazy dunce! I can’t believe how long I’ve been using Eclipse without knowing this. I just learned that you can automatically build and and consume one project into another as a Java jar file in your Eclipse or Rational IDE.

This will save you from having to right-click and export every time you change code in the project that’s consumed. Or it can save you from having to write a build script just for this purpose, which I am now embarrassed to say I’ve done (more than once).  

1. In your Eclipse or Rational IDE, right-click on the destination project and select Properties.
2. Select Java Build Path and then the Projects tab.
3. Click Add… to add the dependency project that you want to consume as a jar file.
4. Next, in the left-hand side of the Properties dialog, switch from the Java Build Path to the item that says Deployment Assembly.
5. Click Add… and select the project to be consumed as shown below

![Eclipse deployment assembly](/assets/content/2013/05/31/eclipse-deployment-assembly.png)"Eclipse deployment assembly"

6. Finally, click Apply and OK.

Now, when I build my web app project, my base22-commons library (a separate project) is now automatically built and included in `WEB-INF/lib` as `base22-commons.jar`.
