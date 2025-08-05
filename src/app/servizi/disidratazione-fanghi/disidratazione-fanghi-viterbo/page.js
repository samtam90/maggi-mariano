import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Viterbo",
  canonical: links.servizi["disidratazione-fanghi"]["viterbo"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Viterbo",
  locationNames: { label: "Viterbo", href: "viterbo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["viterbo"],
      name: "Viterbo",
  }),
});
