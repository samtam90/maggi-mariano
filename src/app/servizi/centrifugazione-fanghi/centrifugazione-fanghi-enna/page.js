import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Enna",
  canonical: links.servizi["centrifugazione-fanghi"]["enna"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Enna",
  locationNames: { label: "Enna", href: "enna" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["enna"],
      name: "Enna",
  }),
});
