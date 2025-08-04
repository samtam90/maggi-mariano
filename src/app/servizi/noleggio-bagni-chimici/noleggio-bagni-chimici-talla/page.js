import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Talla",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Talla", 
  locationNames: {label: "Talla", href: "talla"} 
});
