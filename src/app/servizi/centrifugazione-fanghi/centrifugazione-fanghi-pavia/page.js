import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Pavia",
  canonical: links.servizi["centrifugazione-fanghi"]["pavia"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Pavia",
  locationNames: { label: "Pavia", href: "pavia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["pavia"],
      name: "Pavia",
  }),
});
