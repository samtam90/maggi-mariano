import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Biella",
  canonical: links.servizi["centrifugazione-fanghi"]["biella"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Biella",
  locationNames: { label: "Biella", href: "biella" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["biella"],
      name: "Biella",
  }),
});
