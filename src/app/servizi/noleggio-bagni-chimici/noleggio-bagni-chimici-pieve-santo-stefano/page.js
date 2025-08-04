import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Pieve Santo Stefano",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Pieve Santo Stefano", 
  locationNames: {label: "Pieve Santo Stefano", href: "pieve-santo-stefano"} 
});
