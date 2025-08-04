import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Benevento",
  canonical: links.servizi["noleggio-bagni-chimici"]["benevento"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Benevento", 
  locationNames: {label: "Benevento", href: "benevento"} 
});
