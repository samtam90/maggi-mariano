import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Ragusa",
  canonical: links.servizi["centrifugazione-fanghi"]["ragusa"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Ragusa",
  locationNames: { label: "Ragusa", href: "ragusa" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["ragusa"],
      name: "Ragusa",
  }),
});
