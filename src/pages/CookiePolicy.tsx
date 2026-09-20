import LegalPage, { LegalContact } from "@/components/legal/LegalPage";

const CookiePolicy = () => (
  <LegalPage
    title="Cookie & Local Storage Policy"
    description="Details of the cookies, local-storage keys, consent controls, and third-party browser technologies used by BevOry."
  >
    <p>
      This policy explains the browser technologies used by BevOry. "Cookies" are small values stored by a browser and
      sent with matching web requests. "Local storage" is browser storage that normally stays on a device until a site
      or user removes it. Similar technologies may include pixels, SDK calls, cache, and temporary authentication
      parameters. This policy should be read with our <a href="/privacy-policy">Privacy Policy</a>.
    </p>

    <h2>1. Our consent model</h2>
    <p>
      Necessary technologies support the age gate, privacy preference, city selection, authentication, security, and
      interface operation. They are used when needed to provide a feature you request and are not switched off by the
      Analytics choice. Optional Google Analytics is configured with analytics storage denied by default and is loaded
      only after you choose <strong>"Allow analytics"</strong>. BevOry configures advertising storage, advertising user
      data, ad personalisation, and Google signals as denied or disabled.
    </p>
    <p>
      You can reopen the consent panel at any time by selecting <strong>"Privacy choices"</strong> in either website
      footer. Choosing "Necessary only" tells our Google consent controls to deny Analytics going forward. It does not
      necessarily delete identifiers already stored during an earlier grant; use your browser's site-data controls to
      remove those from the device.
    </p>

    <h2>2. Current BevOry storage</h2>
    <div className="overflow-x-auto">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Purpose</th>
            <th>Typical duration</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>bevory-age-policy-2026-09-20</code></td>
            <td>Local storage</td>
            <td>Records the time, policy version, and minimum age confirmed through the 25+ gate on this browser.</td>
            <td>Until cleared, changed, or the key version is retired.</td>
            <td>Necessary</td>
          </tr>
          <tr>
            <td><code>bevory-analytics-consent-v1</code></td>
            <td>Local storage</td>
            <td>Records "granted" or "denied" so the site can honour your Analytics choice.</td>
            <td>Until you change it, clear site data, or the key version is retired.</td>
            <td>Necessary preference record</td>
          </tr>
          <tr>
            <td><code>bevory_location</code></td>
            <td>Local storage</td>
            <td>Stores selected country, state, and city for locally relevant information.</td>
            <td>Until replaced or cleared.</td>
            <td>Necessary / requested preference</td>
          </tr>
          <tr>
            <td><code>bevory-session</code></td>
            <td>Local storage</td>
            <td>Stores the signed-in session token and basic account response needed to keep you authenticated.</td>
            <td>Until sign-out, invalidation, expiry, or browser cleanup.</td>
            <td>Necessary when signed in</td>
          </tr>
          <tr>
            <td><code>bevory_city</code></td>
            <td>First-party cookie</td>
            <td>Remembers the city selected in the location control.</td>
            <td>Up to 1 year unless replaced or removed.</td>
            <td>Necessary / requested preference</td>
          </tr>
          <tr>
            <td><code>bevory_oauth_nonce</code></td>
            <td>First-party, HttpOnly cookie</td>
            <td>Binds a Google sign-in response to the browser that started it and prevents reuse of the callback state.</td>
            <td>Up to 10 minutes; consumed and cleared on callback.</td>
            <td>Necessary security</td>
          </tr>
          <tr>
            <td><code>sidebar:state</code></td>
            <td>First-party cookie</td>
            <td>Remembers whether the administration sidebar is open or collapsed.</td>
            <td>Up to 7 days unless replaced or removed.</td>
            <td>Necessary interface preference</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>
      A Google sign-in uses both a short-lived signed state parameter and the HttpOnly nonce cookie above. The callback
      consumes the nonce once. It then returns the signed BevOry session token in the URL fragment; the client removes
      that fragment synchronously, before making any API request, validates the token through <code>/auth/me</code>,
      and stores the valid session in <code>bevory-session</code>. These are necessary authentication controls, not
      Analytics technologies.
    </p>
    <p>
      Administration tools may also keep a temporary <code>bevory:price-draft:&lt;product-id&gt;</code> local-storage
      entry so an authorised editor does not lose an unfinished price form. Service-worker Cache Storage can retain
      versioned static, image, and API-response caches for performance and offline resilience. These caches contain
      requested application resources rather than an advertising profile and are replaced or deleted as cache
      versions change or when browser site data is cleared.
    </p>

    <h2>3. Optional Google Analytics technologies</h2>
    <p>
      After consent, Google Analytics may set or read identifiers commonly named <code>_ga</code> and
      <code>_ga_&lt;container-id&gt;</code>, together with other keys Google may introduce for measurement. They help
      distinguish browsers, maintain a session, count visits and interactions, and produce aggregate reports. Exact
      names, duration, and behaviour can vary by browser, Google configuration, consent mode, and product update; some
      identifiers can persist for months or longer unless they expire or are cleared.
    </p>
    <p>
      BevOry does not intentionally enable Google advertising cookies through its consent panel. Browser privacy tools,
      extensions, network filtering, or Google account settings may further limit measurement. Google acts under its
      own service and data-processing terms for the parts it controls.
    </p>

    <h2>4. YouTube and external content</h2>
    <p>
      BevOry pages may contain YouTube links or embedded players. Some embeds use
      <code> youtube-nocookie.com</code> before playback, while other video experiences may use YouTube's standard embed
      domain. When you load or play an embed, Google/YouTube may receive request data and may use cookies or local
      storage according to your browser, Google status, consent signals, and their policies. Those technologies are
      controlled by Google, not BevOry. If you prefer not to contact YouTube, do not start embedded media or follow the
      external link.
    </p>

    <h2>5. Browser cache and essential network data</h2>
    <p>
      Browsers, Cloudflare, and hosting infrastructure may temporarily cache pages, scripts, fonts, images, and network
      responses to deliver and protect the Service. HTTP cache entries are not necessarily cookies and are governed by
      response headers and browser settings. Cloudflare may also apply short-lived security or challenge technologies
      when traffic appears abusive; names and duration can vary with the security event. These are used for integrity,
      availability, and fraud prevention rather than BevOry advertising.
    </p>

    <h2>6. How to control or delete storage</h2>
    <ul>
      <li>Use "Privacy choices" in the footer to grant or deny optional Analytics.</li>
      <li>Use your browser settings to inspect, block, or delete cookies and local storage for <code>bevory.in</code>.</li>
      <li>Use private-browsing or browser tracking controls where appropriate.</li>
      <li>Sign out before clearing a session on a shared device.</li>
      <li>Use Google and YouTube account/privacy controls for activity governed by those services.</li>
    </ul>
    <p>
      Blocking necessary storage may repeatedly show the age or consent prompts, lose the selected city, prevent
      sign-in, or make features unreliable. Browser controls differ; consult your browser provider for current steps.
    </p>

    <h2>7. Changes and contact</h2>
    <p>
      We will update this table when we materially change the technologies under our control. A provider may update its
      own names or behaviour before this page changes. If you see an unlisted BevOry storage key, send the key name,
      page URL, date, and browser details so we can investigate.
    </p>
    <LegalContact purpose="cookie, browser-storage, and consent questions" />
  </LegalPage>
);

export default CookiePolicy;
