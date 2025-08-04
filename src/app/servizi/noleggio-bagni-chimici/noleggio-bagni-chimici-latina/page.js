import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Latina",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Latina", 
  locationNames: {label: "Latina", href: "latina"} 
});
