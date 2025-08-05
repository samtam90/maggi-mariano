import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Tredozio",
  canonical: links.servizi["centrifugazione-fanghi"]["tredozio"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Tredozio",
  locationNames: { label: "Tredozio", href: "tredozio" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
