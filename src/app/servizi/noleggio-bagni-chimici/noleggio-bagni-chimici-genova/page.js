import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Genova",
  canonical: links.servizi["noleggio-bagni-chimici"]["genova"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Genova", 
  locationNames: {label: "Genova", href: "genova"} 
});
