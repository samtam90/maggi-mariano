import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Città di Castello",
  canonical: links.servizi["noleggio-bagni-chimici"]["città-di-castello"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Città di Castello", 
  locationNames: {label: "Città di Castello", href: "città-di-castello"} 
});
