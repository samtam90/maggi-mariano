import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Gambassi Terme",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Gambassi Terme", 
  locationNames: {label: "Gambassi Terme", href: "gambassi-terme"} 
});
