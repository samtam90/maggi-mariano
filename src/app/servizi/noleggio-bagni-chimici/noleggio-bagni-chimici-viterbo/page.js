import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Viterbo",
  canonical: links.servizi["noleggio-bagni-chimici"]["viterbo"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Viterbo",
  locationNames: { label: "Viterbo", href: "viterbo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["viterbo"],
      name: "Viterbo",
  }),
});
