import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Brindisi",
  canonical: links.servizi["centrifugazione-fanghi"]["brindisi"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Brindisi",
  locationNames: { label: "Brindisi", href: "brindisi" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["brindisi"],
      name: "Brindisi",
  }),
});
