import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Sesto Fiorentino",
  canonical: links.servizi["noleggio-bagni-chimici"]["sesto-fiorentino"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Sesto Fiorentino", 
  locationNames: {label: "Sesto Fiorentino", href: "sesto-fiorentino"} 
});
