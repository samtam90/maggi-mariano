import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Fucecchio",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Fucecchio", 
  locationNames: {label: "Fucecchio", href: "fucecchio"} 
});
