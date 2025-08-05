import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Pisa",
  canonical: links.servizi["centrifugazione-fanghi"]["pisa"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Pisa",
  locationNames: { label: "Pisa", href: "pisa" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["pisa"],
      name: "Pisa",
  }),
});
