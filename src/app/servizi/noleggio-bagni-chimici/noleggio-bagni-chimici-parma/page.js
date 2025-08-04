import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Parma",
  canonical: links.servizi["noleggio-bagni-chimici"]["parma"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Parma", 
  locationNames: {label: "Parma", href: "parma"} 
});
