export type emailtype = 'forgotpassword' | 'verifyemail';
export function mailtemp(emailtype: emailtype, token) {
	if (emailtype === 'forgotpassword') {
		return `
        <!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
  xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="x-apple-disable-message-reformatting" />
  <title></title>

  <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900" rel="stylesheet" />

  <style>
    html,
    body {
      margin: 0 auto !important;
      padding: 0 !important;
      height: 100% !important;
      width: 100% !important;
      background: #eef1f3;
    }

    * {
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
    }

    div[style*="margin: 16px 0"] {
      margin: 0 !important;
    }

    table,
    td {
      mso-table-lspace: 0pt !important;
      mso-table-rspace: 0pt !important;
    }

    table {
      border-spacing: 0 !important;
      border-collapse: collapse !important;
      table-layout: fixed !important;
      margin: 0 auto !important;
    }

    img {
      -ms-interpolation-mode: bicubic;
    }

    a {
      text-decoration: none;
    }

    *[x-apple-data-detectors],
    /* iOS */
    .unstyle-auto-detected-links *,
    .aBn {
      border-bottom: 0 !important;
      cursor: default !important;
      color: inherit !important;
      text-decoration: none !important;
      font-size: inherit !important;
      font-family: inherit !important;
      font-weight: inherit !important;
      line-height: inherit !important;
    }

    .a6S {
      display: none !important;
      opacity: 0.01 !important;
    }

    .im {
      color: inherit !important;
    }

    img.g-img+div {
      display: none !important;
    }

    @media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
      u~div .email-container {
        min-width: 320px !important;
      }
    }

    @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
      u~div .email-container {
        min-width: 375px !important;
      }
    }

    @media only screen and (min-device-width: 414px) {
      u~div .email-container {
        min-width: 414px !important;
      }
    }
  </style>

  <style>
    .primary {
      background: #0555BB;
    }

    .bg_white {
      background: #eef1f3;
    }

    .bg_light {
      background: #fff;
    }

    .bg_black {
      background: #06172d;
    }

    .bg_dark {
      background: rgba(0, 0, 0, .8);
    }

    .email-section {
      padding: 2.5em;
    }

    /*BUTTON*/
    .btn {
      padding: 10px 15px;
      display: inline-block;
    }

    .btn.btn-primary {
      border-radius: 5px;
      background: #0555BB;
      color: #ffffff;
    }

    .btn.btn-white {
      border-radius: 5px;
      background: #ffffff;
      color: #06172d;
    }

    .btn.btn-white-outline {
      border-radius: 5px;
      background: transparent;
      border: 1px solid #fff;
      color: #fff;
    }

    .btn.btn-black-outline {
      border-radius: 0px;
      background: transparent;
      border: 2px solid #06172d;
      color: #06172d;
      font-weight: 700;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: 'Lato', sans-serif;
      color: #06172d;
      margin-top: 0;
      font-weight: 400;
    }

    body {
      font-family: 'Lato', sans-serif;
      font-weight: 400;
      font-size: 15px;
      line-height: 1.8;
      color: rgba(0, 0, 0, .4);
    }

    a {
      color: #0555BB;
    }

    table {}

    /*LOGO*/

    .logo h1 {
      margin: 0;
    }

    .logo h1 a {
      color: #0555BB;
      font-size: 24px;
      font-weight: 700;
      font-family: 'Lato', sans-serif;
    }

    /*HERO*/
    .hero {
      position: relative;
      z-index: 0;
    }

    .hero .text {
      color: rgba(0, 0, 0, .3);
    }

    .hero .text h2 {
      color: #06172d;
      font-size: 31px;
      margin-bottom: 0;
      font-weight: 900;
      line-height: 1.4;
    }

    .hero .text h3 {
      font-size: 18px;
      font-weight: 300;
    }

    .hero .text h2 span {
      font-weight: 600;
      color: #0555BB;
    }



    .heading-section {}

    .heading-section h2 {
      color: #06172d;
      font-size: 28px;
      margin-top: 0;
      line-height: 1.4;
      font-weight: 400;
    }

    .heading-section .subheading {
      margin-bottom: 20px !important;
      display: inline-block;
      font-size: 13px;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: rgba(0, 0, 0, .4);
      position: relative;
    }

    .heading-section .subheading::after {
      position: absolute;
      left: 0;
      right: 0;
      bottom: -10px;
      content: '';
      width: 100%;
      height: 2px;
      background: #0555BB;
      margin: 0 auto;
    }

    .heading-section-white {
      color: rgba(255, 255, 255, .8);
    }

    .heading-section-white h2 {
      font-family:
        line-height: 1;
      padding-bottom: 0;
    }

    .heading-section-white h2 {
      color: #ffffff;
    }

    .heading-section-white .subheading {
      margin-bottom: 0;
      display: inline-block;
      font-size: 13px;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: rgba(255, 255, 255, .4);
    }


    ul.social {
      padding: 0;
    }

    ul.social li {
      display: inline-block;
      margin-right: 10px;
    }

    /*FOOTER*/

    .footer {
      border-top: 1px solid rgba(0, 0, 0, .05);
      color: rgba(0, 0, 0, .5);
    }

    .footer .heading {
      color: #06172d;
      font-size: 20px;
    }

    .footer ul {
      margin: 0;
      padding: 0;
    }

    .footer ul li {
      list-style: none;
      margin-bottom: 10px;
    }

    .footer ul li a {
      color: rgba(0, 0, 0, 1);
    }


    @media screen and (max-width: 500px) {}
  </style>
</head>

<body width="100%" style="
			margin: 0;
			padding: 0 !important;
			mso-line-height-rule: exactly;
			background-color: #eef1f3;
		">
  <center style="width: 100%; background-color: #eef1f3">
    <div style="
					display: none;
					font-size: 1px;
					max-height: 0px;
					max-width: 0px;
					opacity: 0;
					overflow: hidden;
					mso-hide: all;
					font-family: sans-serif;
				">
      &zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
    </div>
    <div style="max-width: 600px; margin: 0 auto" class="email-container">
      <!-- BEGIN BODY -->
      <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%"
        style="margin: auto">
        <tr>
          <td valign="top" class="bg_white" style="padding: 1em 2.5em 0 2.5em">
            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
              <tr>
                <td class="logo" style="text-align: center">
                  <img src="https://i.ibb.co/pZmBD09/Group-4.png" style="width: 140px" />
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <!-- end tr -->
        <tr>
          <td valign="middle" class="hero bg_white" style="padding: 3em 0 2em 0">
            <img src="https://i.ibb.co/NLn7Mkn/lock.png" alt="" style="
									width: 100px;
                  max-width: 120px;
                  filter: contrast(0.8);
									height: auto;
									margin: auto;
									display: block;
								" />
          </td>
        </tr>
        <!-- end tr -->
        <tr>
          <td valign="middle" class="hero bg_white" style="padding: 2em 0 4em 0">
            <table>
              <tr>
                <td>
                  <div class="text" style="padding: 0 2.5em; text-align: center">
                    <h2 style=" margin-bottom: 1rem;">Forgot your password?</h2>
                    <h3>
                      That's okay, it happens! Click on the button below to reset your password.
                    </h3>
                    <p>
                      <a href="https://freespaace.com/reset/${token}" class="btn btn-primary">Reset Password</a>
                      <br />
                      If you didn’t ask to reset your password, please ignore this email
                      <br />
                    </p>
                    <p>
                      <img src="https://i.ibb.co/ZV3wVPQ/freespaace-team.png" style="width: 122px; margin-top: 1rem;" />
                    </p>
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <!-- end tr -->
        <!-- 1 Column Text + Button : END -->
      </table>
      <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%"
        style="margin: auto">
        <tr>
          <td valign="middle" class="bg_light footer email-section">
            <table>
              <tr>
                <td valign="top" width="66.67%" style="padding-top: 20px">
                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                    <tr>
                      <td style="text-align: left; padding-right: 10px">
                        <h3 class="heading">About</h3>
                        <p>
                          A convenient and safe space to free your mind
                          without being judged or labeled, and improve your
                          mental health.
                        </p>
                        <p>
                          <a href="https://facebook.com/freespaace">FB</a> |
                          <a href="https://twitter.com/freespace">TW</a> |
                          <a href="https://linkedin.com/freespaace">LN</a>
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>

                <td valign="top" width="33.333%" style="padding-top: 20px">
                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                    <tr>
                      <td style="text-align: left; padding-left: 10px">
                        <h3 class="heading"></h3>
                        <ul>
                          <li>
                            <a href="https://freeespaace.com/home">Home</a>
                          </li>
                          <li>
                            <a href="https://freeespaace.com/about">About</a>
                          </li>
                          <li>
                            <a href="https://freeespaace.com/discover">Discover Stories</a>
                          </li>
                          <li>
                            <a href="https://freeespaace.com/helpline">Helpline</a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td class="bg_light" style="text-align: center">
            <p>© 2020 Freespaace. All Rights Reserved</p>
          </td>
        </tr>
        <!-- end: tr -->
      </table>
    </div>
  </center>
</body>

</html>`;
	} else {
		return `
    <!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
  xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="x-apple-disable-message-reformatting" />
  <title></title>

  <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900" rel="stylesheet" />

  <style>
    html,
    body {
      margin: 0 auto !important;
      padding: 0 !important;
      height: 100% !important;
      width: 100% !important;
      background: #eef1f3;
    }

    * {
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
    }

    div[style*="margin: 16px 0"] {
      margin: 0 !important;
    }

    table,
    td {
      mso-table-lspace: 0pt !important;
      mso-table-rspace: 0pt !important;
    }

    table {
      border-spacing: 0 !important;
      border-collapse: collapse !important;
      table-layout: fixed !important;
      margin: 0 auto !important;
    }

    img {
      -ms-interpolation-mode: bicubic;
    }

    a {
      text-decoration: none;
    }

    *[x-apple-data-detectors],
    /* iOS */
    .unstyle-auto-detected-links *,
    .aBn {
      border-bottom: 0 !important;
      cursor: default !important;
      color: inherit !important;
      text-decoration: none !important;
      font-size: inherit !important;
      font-family: inherit !important;
      font-weight: inherit !important;
      line-height: inherit !important;
    }

    .a6S {
      display: none !important;
      opacity: 0.01 !important;
    }

    .im {
      color: inherit !important;
    }

    img.g-img+div {
      display: none !important;
    }

    @media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
      u~div .email-container {
        min-width: 320px !important;
      }
    }

    @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
      u~div .email-container {
        min-width: 375px !important;
      }
    }

    @media only screen and (min-device-width: 414px) {
      u~div .email-container {
        min-width: 414px !important;
      }
    }
  </style>

  <style>
    .primary {
      background: #0555BB;
    }

    .bg_white {
      background: #eef1f3;
    }

    .bg_light {
      background: #fff;
    }

    .bg_black {
      background: #06172d;
    }

    .bg_dark {
      background: rgba(0, 0, 0, .8);
    }

    .email-section {
      padding: 2.5em;
    }

    /*BUTTON*/
    .btn {
      padding: 10px 15px;
      display: inline-block;
    }

    .btn.btn-primary {
      border-radius: 5px;
      background: #0555BB;
      color: #ffffff;
    }

    .btn.btn-white {
      border-radius: 5px;
      background: #ffffff;
      color: #06172d;
    }

    .btn.btn-white-outline {
      border-radius: 5px;
      background: transparent;
      border: 1px solid #fff;
      color: #fff;
    }

    .btn.btn-black-outline {
      border-radius: 0px;
      background: transparent;
      border: 2px solid #06172d;
      color: #06172d;
      font-weight: 700;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: 'Lato', sans-serif;
      color: #06172d;
      margin-top: 0;
      font-weight: 400;
    }

    body {
      font-family: 'Lato', sans-serif;
      font-weight: 400;
      font-size: 15px;
      line-height: 1.8;
      color: rgba(0, 0, 0, .4);
    }

    a {
      color: #0555BB;
    }

    table {}

    /*LOGO*/

    .logo h1 {
      margin: 0;
    }

    .logo h1 a {
      color: #0555BB;
      font-size: 24px;
      font-weight: 700;
      font-family: 'Lato', sans-serif;
    }

    /*HERO*/
    .hero {
      position: relative;
      z-index: 0;
    }

    .hero .text {
      color: rgba(0, 0, 0, .3);
    }

    .hero .text h2 {
      color: #06172d;
      font-size: 31px;
      margin-bottom: 0;
      font-weight: 900;
      line-height: 1.4;
    }

    .hero .text h3 {
      font-size: 18px;
      font-weight: 300;
    }

    .hero .text h2 span {
      font-weight: 600;
      color: #0555BB;
    }



    .heading-section {}

    .heading-section h2 {
      color: #06172d;
      font-size: 28px;
      margin-top: 0;
      line-height: 1.4;
      font-weight: 400;
    }

    .heading-section .subheading {
      margin-bottom: 20px !important;
      display: inline-block;
      font-size: 13px;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: rgba(0, 0, 0, .4);
      position: relative;
    }

    .heading-section .subheading::after {
      position: absolute;
      left: 0;
      right: 0;
      bottom: -10px;
      content: '';
      width: 100%;
      height: 2px;
      background: #0555BB;
      margin: 0 auto;
    }

    .heading-section-white {
      color: rgba(255, 255, 255, .8);
    }

    .heading-section-white h2 {
      font-family:
        line-height: 1;
      padding-bottom: 0;
    }

    .heading-section-white h2 {
      color: #ffffff;
    }

    .heading-section-white .subheading {
      margin-bottom: 0;
      display: inline-block;
      font-size: 13px;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: rgba(255, 255, 255, .4);
    }


    ul.social {
      padding: 0;
    }

    ul.social li {
      display: inline-block;
      margin-right: 10px;
    }

    /*FOOTER*/

    .footer {
      border-top: 1px solid rgba(0, 0, 0, .05);
      color: rgba(0, 0, 0, .5);
    }

    .footer .heading {
      color: #06172d;
      font-size: 20px;
    }

    .footer ul {
      margin: 0;
      padding: 0;
    }

    .footer ul li {
      list-style: none;
      margin-bottom: 10px;
    }

    .footer ul li a {
      color: rgba(0, 0, 0, 1);
    }


    @media screen and (max-width: 500px) {}
  </style>
</head>

<body width="100%" style="
			margin: 0;
			padding: 0 !important;
			mso-line-height-rule: exactly;
			background-color: #eef1f3;
		">
  <center style="width: 100%; background-color: #eef1f3">
    <div style="
					display: none;
					font-size: 1px;
					max-height: 0px;
					max-width: 0px;
					opacity: 0;
					overflow: hidden;
					mso-hide: all;
					font-family: sans-serif;
				">
      &zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
    </div>
    <div style="max-width: 600px; margin: 0 auto" class="email-container">
      <!-- BEGIN BODY -->
      <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%"
        style="margin: auto">
        <tr>
          <td valign="top" class="bg_white" style="padding: 1em 2.5em 0 2.5em">
            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
              <tr>
                <td class="logo" style="text-align: center">
                  <img src="https://i.ibb.co/pZmBD09/Group-4.png" style="width: 140px" />
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <!-- end tr -->
        <tr>
          <td valign="middle" class="hero bg_white" style="padding: 3em 0 2em 0">
            <img src="https://i.ibb.co/TBG7Bw3/Stuck-at-Home-Happy-Place.png" alt="" style="
            width: 220px;
            /* max-width: 120px; */
            height: 160px;
            margin: auto;
            object-fit: cover;
            display: block;
								" />
          </td>
        </tr>
        <!-- end tr -->
        <tr>
          <td valign="middle" class="hero bg_white" style="padding: 2em 0 4em 0">
            <table>
              <tr>
                <td>
                  <div class="text" style="padding: 0 2.5em; text-align: center">
                    <h2 style=" margin-bottom: 1rem;">Hey!, Thanks for signing up</h2>
                    <h3>
                      Please verify that you are the owner of this e-mail address by clicking the link below. This link
                      will be valid for 24 hours.
                    </h3>
                    <p>
                      <a href="#" class="btn btn-primary">Verify Email</a>
                      <br />
                      or use link
                      <br />
                      <a href="https://freespaace.com/verify/${token}">https://freespaace.com/verify/${token}</a>
                    </p>
                    <p>
                      <img src="https://i.ibb.co/ZV3wVPQ/freespaace-team.png" style="width: 122px; margin-top: 1rem;" />
                    </p>
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <!-- end tr -->
        <!-- 1 Column Text + Button : END -->
      </table>
      <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%"
        style="margin: auto">
        <tr>
          <td valign="middle" class="bg_light footer email-section">
            <table>
              <tr>
                <td valign="top" width="66.67%" style="padding-top: 20px">
                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                    <tr>
                      <td style="text-align: left; padding-right: 10px">
                        <h3 class="heading">About</h3>
                        <p>
                          A convenient and safe space to free your mind
                          without being judged or labeled, and improve your
                          mental health.
                        </p>
                        <p>
                          <a href="https://facebook.com/freespaace">FB</a> |
                          <a href="https://twitter.com/freespace">TW</a> |
                          <a href="https://linkedin.com/freespaace">LN</a>
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>

                <td valign="top" width="33.333%" style="padding-top: 20px">
                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                    <tr>
                      <td style="text-align: left; padding-left: 10px">
                        <h3 class="heading">Useful Links</h3>
                        <ul>
                          <li>
                            <a href="https://freeespaace.com/home">Home</a>
                          </li>
                          <li>
                            <a href="https://freeespaace.com/about">About</a>
                          </li>
                          <li>
                            <a href="https://freeespaace.com/discover">Discover Stories</a>
                          </li>
                          <li>
                            <a href="https://freeespaace.com/helpline">Helpline</a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td class="bg_light" style="text-align: center">
            <p>© 2020 Freespaace. All Rights Reserved</p>
          </td>
        </tr>
        <!-- end: tr -->
      </table>
    </div>
  </center>
</body>

</html>`;
	}
}
