import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Montelupo Fiorentino",
  canonical: links.servizi["noleggio-bagni-chimici"]["montelupo-fiorentino"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Montelupo Fiorentino", 
  locationNames: {label: "Montelupo Fiorentino", href: "montelupo-fiorentino"} 
});
