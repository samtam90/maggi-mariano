import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici San Giustino",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici San Giustino", 
  locationNames: {label: "San Giustino", href: "san-giustino"} 
});
