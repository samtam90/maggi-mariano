import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Pieve Santo Stefano",
  canonical: links.servizi["noleggio-bagni-chimici"]["pieve-santo-stefano"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Pieve Santo Stefano", 
  locationNames: {label: "Pieve Santo Stefano", href: "pieve-santo-stefano"} 
});
