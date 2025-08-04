import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Foiano della Chiana",
  canonical: links.servizi["noleggio-bagni-chimici"]["foiano-della-chiana"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Foiano della Chiana", 
  locationNames: {label: "Foiano della Chiana", href: "foiano-della-chiana"} 
});
