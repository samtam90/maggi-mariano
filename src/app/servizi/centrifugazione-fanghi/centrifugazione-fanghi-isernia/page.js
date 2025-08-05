import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Isernia",
  canonical: links.servizi["centrifugazione-fanghi"]["isernia"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Isernia",
  locationNames: { label: "Isernia", href: "isernia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["isernia"],
      name: "Isernia",
  }),
});
