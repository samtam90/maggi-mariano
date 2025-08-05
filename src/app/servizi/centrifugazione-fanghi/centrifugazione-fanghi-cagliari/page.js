import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Cagliari",
  canonical: links.servizi["centrifugazione-fanghi"]["cagliari"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Cagliari",
  locationNames: { label: "Cagliari", href: "cagliari" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["cagliari"],
      name: "Cagliari",
  }),
});
