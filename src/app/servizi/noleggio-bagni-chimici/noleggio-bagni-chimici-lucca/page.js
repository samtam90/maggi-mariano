import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Lucca",
  canonical: links.servizi["noleggio-bagni-chimici"]["lucca"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Lucca", 
  locationNames: {label: "Lucca", href: "lucca"} 
});
