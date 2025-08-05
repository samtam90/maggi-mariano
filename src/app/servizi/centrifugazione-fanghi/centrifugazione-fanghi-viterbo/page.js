import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Viterbo",
  canonical: links.servizi["centrifugazione-fanghi"]["viterbo"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Viterbo",
  locationNames: { label: "Viterbo", href: "viterbo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["viterbo"],
      name: "Viterbo",
  }),
});
