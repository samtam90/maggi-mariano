import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Montefalco",
  canonical: links.servizi["noleggio-bagni-chimici"]["montefalco"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Montefalco", 
  locationNames: {label: "Montefalco", href: "montefalco"} 
});
