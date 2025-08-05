import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Viterbo",
  canonical: links.servizi["frantoio-mobile-inerti"]["viterbo"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Viterbo",
  locationNames: { label: "Viterbo", href: "viterbo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["viterbo"],
      name: "Viterbo",
  }),
});
