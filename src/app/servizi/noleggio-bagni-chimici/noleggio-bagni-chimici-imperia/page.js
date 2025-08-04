import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Imperia",
  canonical: links.servizi["noleggio-bagni-chimici"]["imperia"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Imperia", 
  locationNames: {label: "Imperia", href: "imperia"} 
});
