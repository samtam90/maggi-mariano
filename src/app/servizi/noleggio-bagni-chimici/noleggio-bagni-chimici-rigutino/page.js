import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Rigutino",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Rigutino", 
  locationNames: {label: "Rigutino", href: "rigutino"} 
});
