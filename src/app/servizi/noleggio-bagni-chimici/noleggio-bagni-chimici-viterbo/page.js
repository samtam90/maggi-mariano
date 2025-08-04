import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Viterbo",
  canonical: links.servizi["noleggio-bagni-chimici"]["viterbo"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Viterbo", 
  locationNames: {label: "Viterbo", href: "viterbo"} 
});
