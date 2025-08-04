import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Subbiano",
  canonical: links.servizi["noleggio-bagni-chimici"]["subbiano"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Subbiano", 
  locationNames: {label: "Subbiano", href: "subbiano"} 
});
