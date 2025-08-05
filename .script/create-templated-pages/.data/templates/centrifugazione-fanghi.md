import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi [name]",
  canonical: links.servizi["centrifugazione-fanghi"]["[path]"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi [name]",
  locationNames: { label: "[name]", href: "[path]" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["[province.path]"],
      name: "[province.name]",
  }),
});
