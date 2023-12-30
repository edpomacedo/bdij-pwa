// Providers.jsx
import React from "react";
import "./Providers.css";
import VercelLogo from "../Trademarks/VercelLogo";
import WikimediaLogo from "../Trademarks/WikimediaLogo";
import WikibaseLogo from "../Trademarks/WikibaseLogo";
import CloudflareLogo from "../Trademarks/CloudflareLogo";
import GithubLogo from "../Trademarks/GithubLogo";

export default function Providers() {
  return (
    <div className="providers_fundo">
      <div className="providers_margem">
        <h2 className="providers_texto">
          Processamento dos dados, gerenciamento do banco de dados, lógica de
          negócios, autenticação, APIs, serviços e outras operações:
        </h2>
        <div className="providers_matriz">
          <VercelLogo
            className="providers_vercel"
            alt="Vercel"
            width={152}
            height={42}
          />
          <WikimediaLogo
            className="providers_wikimedia"
            alt="Wikimedia Deutschland"
            width={152}
            height={42}
          />
          <WikibaseLogo
            className="providers_wikibase"
            alt="wikibase.cloud"
            width={152}
            height={42}
          />
          <CloudflareLogo
            className="providers_cloudflare"
            alt="Cloudflare"
            width={152}
            height={42}
          />
          <GithubLogo
            className="providers_github"
            alt="Github"
            width={152}
            height={42}
          />
        </div>
      </div>
    </div>
  );
}
