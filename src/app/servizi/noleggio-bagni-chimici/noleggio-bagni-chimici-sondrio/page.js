import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Sondrio",
  canonical: links.servizi["noleggio-bagni-chimici"]["sondrio"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Sondrio", 
  locationNames: {label: "Sondrio", href: "sondrio"} 
});
