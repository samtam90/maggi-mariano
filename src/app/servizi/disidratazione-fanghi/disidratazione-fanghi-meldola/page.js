import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Meldola",
  canonical: links.servizi["disidratazione-fanghi"]["meldola"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Meldola",
  locationNames: { label: "Meldola", href: "meldola" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
