/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <Logo img_src={`https://raw.githubusercontent.com/tabby-lang/tc/master/logo.png`} />
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href="#try">Getting Started</Button>
            <Button href={docUrl('doc1.html')}>Example Link</Button>
            <Button href={docUrl('doc2.html')}>Example Link 2</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
        <h2>Features</h2>
        <h3>Safety</h3>
        <ul style={{listStyleType: 'none'}}>
        <li>Immutable by default.</li>
        <li>Local variables only.</li>
        <li>Stringent bounds checking.</li>
        
        <h3>Interoperability</h3>
        <li>Easily <b>#include</b> C/C++ libraries.</li>
        <li>Go-esque syntax allows for simplified Go library ports.</li>
        <li></li>
        </ul>
      </div>
    );

    const TryOut = () => (
      <Block id="try">
        {[
          {
            content:
              'Currently, using Tabby requires you to build the compiler yourself <br/>' +
              '(builds for GNU/Linux, Windows and Mac OS will be available soon). <br/>' +
              '<ol>' +
              `<li>Make sure you have both <b><a href="https://github.com/goccmack/gocc">gocc</a></b> and
              <b><a href="https://gcc.gnu.org/onlinedocs/gcc/G_002b_002b-and-GCC.html">G++</a></b> installed,
              and they're in your path.</li>` +
              '<li><code>go get github.com/tabby-lang/tc</code></li>' +
              '<li>cd into <code>$GOPATH/github.com/tabby-lang/tc</code></li>' +
              '<li>Run <code>make</code></li>' +
              '<li>Compile one of the examples: <code>./tc examples/math.tby</code></li>' +
              '<li>Run the freshly built <code>math</code> binary</li>' +
              '</ol>',
            image: `${baseUrl}img/terminal.svg`,
            imageAlign: 'left',
            title: 'Getting Started (Developer Edition)',
          },
        ]}
      </Block>
    );

    const Description = () => (
      <Block background="dark">
        {[
          {
            content:
              `<div class="tabs"><div class="nav-tabs"><div id="tab-group-106-tab-107" class="nav-link active" data-group="group_106" data-tab="tab-group-106-content-107">Tabby</div><div id="tab-group-106-tab-108" class="nav-link" data-group="group_106" data-tab="tab-group-106-content-108">Go</div><div id="tab-group-106-tab-109" class="nav-link" data-group="group_106" data-tab="tab-group-106-content-109">C++</div></div><div class="tab-content" style=""><div id="tab-group-106-content-107" class="tab-pane active" data-group="group_106" tabindex="-1"><div><span><pre style="overflow: hidden;"><code class="hljs css language-go" style="padding-right: 100%; overflow: hidden;"><span class="hljs-comment">/* Unlike Go, there is no need to declare package main/func main().<br>   main/main() is inferred in files that have neither<br>   a package declaration, nor a function declaration.<br>*/</span><br><span class="hljs-built_in">println</span>(<span class="hljs-string">"Hello, World!"</span>)<br></code></pre>
              </span></div></div><div id="tab-group-106-content-108" class="tab-pane" data-group="group_106" tabindex="-1"><div><span><pre style="overflow: hidden;"><code class="hljs css language-go" style="padding-right: 100%; overflow: hidden;"><span class="hljs-keyword">package</span> main<br><br><span class="hljs-keyword">import</span> <span class="hljs-string">"fmt"</span><br><br><span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">main</span><span class="hljs-params">()</span></span> {<br>    fmt.Println(<span class="hljs-string">"Hello, World!"</span>)<br>}<br></code></pre>
              </span></div></div><div id="tab-group-106-content-109" class="tab-pane" data-group="group_106" tabindex="-1"><div><span><pre style="overflow: hidden;"><code class="hljs css language-cpp" style="padding-right: 100%; overflow: hidden;"><span class="hljs-meta">#<span class="hljs-meta-keyword">include</span> <span class="hljs-meta-string">&lt;iostream&gt;</span></span><br><span class="hljs-keyword">using</span> <span class="hljs-keyword">namespace</span> <span class="hljs-built_in">std</span>;<br><br><span class="hljs-function"><span class="hljs-keyword">int</span> <span class="hljs-title">main</span><span class="hljs-params">()</span> <br></span>{<br>    <span class="hljs-built_in">cout</span> &lt;&lt; <span class="hljs-string">"Hello, World!"</span>;<br>    <span class="hljs-keyword">return</span> <span class="hljs-number">0</span>;<br>}<br></code></pre>
              </span></div></div></div></div>`,
            image: `${baseUrl}img/hacker-cat.svg`,
            imageAlign: 'right',
            title: 'Hello, World!',
          },
        ]}
      </Block>
    );

    const LearnHow = () => (
      <Block background="light">
        {[
          {
            content:
              `Tailored towards modern game development, the standard library features an opinionated (but swappable) set of core plugins encompassing audio, graphics, controls and UI.`,
            image: `${baseUrl}img/controller.svg`,
            imageAlign: 'right',
            title: 'Batteries Included!',
          },
        ]}
      </Block>
    );

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content: `Emits a C++11 IR. <br/> (Planned) Data Oriented Design support. <br/> Streamlined RAII through <code>defer</code> keyword. <br/> No GC.`,
            image: `${baseUrl}img/performance.svg`,
            imageAlign: 'top',
            title: 'Performance',
          },
          {
            content: 'Features a powerful, Go-derived syntax. <br/> Tools that behave similarly to their Go counterparts.',
            image: `${baseUrl}img/familiarity.svg`,
            imageAlign: 'top',
            title: 'Familiarity',
          },
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
          <FeatureCallout />
          <LearnHow />
          <TryOut />
          <Description />
          <Showcase />
        </div>
      </div>
    );
  }
}

module.exports = Index;
