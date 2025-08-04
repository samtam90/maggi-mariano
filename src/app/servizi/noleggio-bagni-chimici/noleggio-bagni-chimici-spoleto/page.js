import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Spoleto",
  canonical: links.servizi["noleggio-bagni-chimici"]["spoleto"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Spoleto", 
  locationNames: {label: "Spoleto", href: "spoleto"} 
});
