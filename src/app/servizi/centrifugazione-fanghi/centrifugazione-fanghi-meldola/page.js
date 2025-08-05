import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Meldola",
  canonical: links.servizi["centrifugazione-fanghi"]["meldola"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Meldola",
  locationNames: { label: "Meldola", href: "meldola" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
