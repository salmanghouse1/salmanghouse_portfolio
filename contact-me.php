<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./assets/css/stylesheet.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <title>Salman Ghouse Portfolio</title>
</head>

<body>
    <header>

        <h1>Salman Ghouse</h1>


        <!-- Nav completed -->
        <nav>
            <div id="menuToggle">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                <ul id="menu">
                    <li>
                        <a href="#">About Me</a></li>

                    <li>
                        <a href="#work-samples-content">Work</a></li>

                    <li>
                        <a href="./contact-me.php">Contact Me</a></li>

                    <li>
                        <a href="#">Resume</a></li>
                </ul>
        </nav>
    </header>

    <section class="subheading">
        <img class='avatar' src="./assets/images/Avatar.jpg" />
        <h2>I am a&nbsp;<span id="occupation" class="occupation">
            </span>
        </h2>
    </section>
    <article class="contact-background">
        <h2 class="heading-block">Contact Me</h2>
        <p>Have a question or comment? want to ask anything or want to meetup?</p>

        <form>
            <label for="firstName">FirstName<input name="firstName" type='text'/></label>

            <label for="lastName">LasttName<input name='lastName' type='text' /></label>

            <label for="email">Email<input name="email" type='text' /></label>

            <label for="subject">Subject<input name="subject" type='text' /></label>

            <label for="message">Message<textarea name="message" type='text'></textarea></label>

            <button type="submit" name="Send">Send</button>
        </form>

    </article>
    <!-- work samples -->

    <script src="./assets/js/script.js">
    </script>
</body>

</html>