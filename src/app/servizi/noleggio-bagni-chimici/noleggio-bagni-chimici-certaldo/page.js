import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Certaldo",
  canonical: links.servizi["noleggio-bagni-chimici"]["certaldo"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Certaldo", 
  locationNames: {label: "Certaldo", href: "certaldo"} 
});
