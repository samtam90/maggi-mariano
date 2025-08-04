import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Cesa in valdichiana",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Cesa in valdichiana", 
  locationNames: {label: "Cesa in valdichiana", href: "cesa-in-valdichiana"} 
});
